import { ServiceInterface } from '../interfaces/ServiceInterface';

/**
 * Класс для работы с Worker
 */
export class Worker {

    private options: ServiceInterface;
    private isMaster: boolean;

    /**
     * @param options
     * @param isMaster
     */
    constructor(
        options: ServiceInterface,
        isMaster
    ) {
        this.options = options;
        this.isMaster = isMaster;
    }


    /**
     * Запуск воркера
     *
     * todo: логика запуска обработчика запросов
     *
     * ответ: Без понятий, как это реализовывать,
     * я не писал ничего на node js дальше обычной работы с heroku и
     * написания обычного API с помощью express.
     */
    public async startWorker() {
        if (!this.isMaster) {
            // do smt
        }
    }
}