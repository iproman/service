import { ServiceInterface } from './interfaces/ServiceInterface';
import { TransportInterface } from './interfaces/TransportInterface';
import { WorkerInterface } from './interfaces/WorkerInterface';
import { Cluster } from './models/Cluster';
import { Transport } from './models/Transport';
import { Worker } from './models/Worker';


/**
 * MainService
 */
class MainService {

    private cluster: Cluster;
    private transport: TransportInterface;
    private worker: WorkerInterface;


    /**
     * @param options
     */
    constructor(options: ServiceInterface) {

        this.cluster = new Cluster(options);
        this.transport = new Transport(options);
        this.worker = new Worker(options);
    }
}

