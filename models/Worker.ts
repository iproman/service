import { BaseService } from '../BaseService';
import { ServiceInterface } from '../interfaces/ServiceInterface';

/**
 * Класс для работы с Worker
 */
export class Worker extends BaseService {

    private options: ServiceInterface;
    private isMaster: boolean;

    /**
     * @param options
     */
    constructor(
        options: ServiceInterface
    ) {
        super();

        this.options = options;
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