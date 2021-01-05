import { BaseService } from '../BaseService';
import { ServiceInterface } from '../interfaces/ServiceInterface';
import { TransportInterface } from '../interfaces/TransportInterface';

/**
 * Класс для работы с Transport
 */
export class Transport extends BaseService {
    private options: ServiceInterface;

    /**
     * @param options
     */
    constructor(options: ServiceInterface) {
        super();

        this.options = options;
    }


    /**
     * Старт транспорта
     *
     * todo: логика запуска транспорта
     *
     * ответ: Без понятий, как это реализовывать,
     * я не писал ничего на node дальше обычной работы с heroku и
     * написания обычного API с помощью express.
     */
    public async startTransport() {
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