/**
 * ServiceInterface
 */
export interface ServiceInterface {
    transport: Transport;
    cluster: any;
    isClusterMode: boolean;

    start()
}