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
    private isMaster: boolean;

    private cluster: Cluster;
    private transport: TransportInterface;
    private worker: WorkerInterface;

    private clusterOptions: string;


    /**
     * @param options
     */
    constructor(options: ServiceInterface) {

        this.cluster = new Cluster(options, this.isMaster);
        this.transport = new Transport(options).transport;
        this.worker = new Worker(options, this.isMaster);

        this.clusterOptions = this.cluster.mode ?? options.cluster;
    }

    /**
     * Основной метод запуска
     */
    async start() {

        this.cluster.startCluster();

    }
}

