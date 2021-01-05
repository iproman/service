import { ServiceInterface } from '../interfaces/ServiceInterface';
import { TransportInterface } from '../interfaces/TransportInterface';

/**
 * Класс для работы с Transport
 */
export class Transport {
    private options: ServiceInterface;

    /**
     * @param options
     */
    constructor(options: ServiceInterface) {
        this.options = options;
    }

    /**
     * Вид транспорта
     */
    get transport(): TransportInterface {
        return this.options.transport;
    }
}