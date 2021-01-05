import { BaseService } from './BaseService';
import { ServiceInterface } from './interfaces/ServiceInterface';
import { TransportInterface } from './interfaces/TransportInterface';
import { WorkerInterface } from './interfaces/WorkerInterface';
import { Cluster } from './models/Cluster';
import { Transport } from './models/Transport';
import { Worker } from './models/Worker';


/**
 * MainService
 */
class Service extends BaseService {

    private cluster: Cluster;
    private transport: TransportInterface;
    private worker: WorkerInterface;

    private clusterOptions: string;


    /**
     * @param options
     */
    constructor(options: ServiceInterface) {
        super();

        this.cluster = new Cluster(options);
        this.transport = new Transport(options).transport;
        this.worker = new Worker(options);

        this.clusterOptions = this.cluster.clusterOptions;
    }

    /**
     * Основной метод запуска
     */
    async start() {

        // Запуск кластера
        await this.cluster.startCluster();

        // Запуск воркера
        await this.worker.startWorker();

        // Запуск транспорта на основе соединения
        if (this.transport.isPermanentConnection) {
            await this.transport.startTransport();
        }
    }
}

