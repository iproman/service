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

    /**
     * Проверка на постоянность соединения
     */
    public get isPermanentConnection(): boolean {
        return this.connection();
    }

    /**
     * Логика соединения
     *
     * @private
     */
    private connection(): boolean {
        return true;
    }
}