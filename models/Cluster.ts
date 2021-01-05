import { ServiceInterface } from '../interfaces/ServiceInterface';

/**
 * Класс для работы с Cluster
 */
export class Cluster {

    private readonly options: ServiceInterface;
    private isMaster: boolean;

    constructor(options: ServiceInterface, isMaster: boolean) {
        this.options = options;
        this.isMaster = isMaster;
    }

    /**
     * Старт кластера
     *
     * todo: логика запуска дочерних процессов
     *
     * ответ: Без понятий, как это реализовывать,
     * я не писал ничего на node js дальше обычной работы с heroku и
     * написания обычного API с помощью express.
     */
    public async startCluster() {
        if (this.mode) {
            if (this.isMaster) {
                // do smt
            }
        }
    }

    /**
     * Вид кластера
     */
    public get mode() {
        return !!this.options;
    }

    /**
     * Свойства кластер
     */
    public get clusterOptions() {
        return this.mode ?? this.options.cluster
    }
}