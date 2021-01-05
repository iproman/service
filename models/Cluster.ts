import { ServiceInterface } from '../interfaces/ServiceInterface';

/**
 * Класс для работы с Cluster
 */
export class Cluster {

    private readonly options: ServiceInterface;

    constructor(options: ServiceInterface) {
        this.options = options;
    }

    /**
     * Вид кластера
     */
    public get mode() {
        return !!this.options;
    }
}