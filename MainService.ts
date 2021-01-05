import { TransportInterface } from './interfaces/TransportInterface';
import { WorkerInterface } from './interfaces/WorkerInterface';
import { Cluster } from './models/Cluster';

/**
 * MainService
 */
class MainService {

    private cluster: Cluster;
    private transport: TransportInterface;
    private worker: WorkerInterface;

}

