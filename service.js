// Класс является сервером обработки запросов.
// в конструкторе передается транспорт, и настройки кластеризации
// сервер может работать как в одном процессе так и порождать для обработки запросов дочерние процессы.
// Задача дописать недостающие части и отрефакторить существующий код
//
// Не важно, http/ws/tcp/ или простой сокет это все изолируется в транспорте.
// Единственное что знает сервис обработки запросов это тип подключения транспорта, постоянный или временный
// и исходя из этого создает нужную конфигурацию. ну и еще от того какой режим кластеризации был выставлен
// В итоговом варианте ожидаем увидеть код в какой-либо системе контроля версия (github, gitlab) на ваш выбор
// Примеры использования при том или ином транспорте
// Будет плюсом, если задействуете в этом деле typescript и статическую типизацию.

class Service {
    constructor(options) {
        this.transport = options.transport;
        this.isClusterMode = !!options.cluster;
        if( this.isClusterMode ) {
            this.clusterOptions = options.cluster;
        }
    }

    async start() {
        if( this.isClusterMode ) {
            if( this.isMaster ) {
                await this.startCluster();
                if( this.transport.isPermanentConnection ) {
                    await this.startTransport();
                }
            }
            else {
                await this.startWorker();
                if( !this.transport.isPermanentConnection ) {
                    await this.startTransport();
                }
            }
        }
        else {
            await this.startWorker();
            await this.startTransport();
        }
    }

    async startTransport() {
        //todo: логика запуска транспорта
    }

    async startWorker() {
        //todo: логика запуска обработчика запросов
    }

    async startCluster() {
        //todo: логика запуска дочерних процессов
    }
}
