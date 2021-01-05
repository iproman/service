/**
 * TransportInterface
 */
export interface TransportInterface {
    isPermanentConnection: boolean;

    startTransport(): void;
}