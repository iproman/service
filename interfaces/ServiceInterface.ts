/**
 * ServiceInterface
 */
import { TransportInterface } from './TransportInterface';

export interface ServiceInterface {
    transport: TransportInterface;
    cluster: any;
    isClusterMode: boolean;

    start(): void;
}