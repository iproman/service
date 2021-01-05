/**
 * Родительский класс для всех сервисов
 */
export class BaseService {

    /**
     * Проверка на мастера
     */
    protected get isMaster(): boolean {
        return true;
    }
}