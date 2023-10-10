import {CircuitData, ICircuitStorage, CircuitStorage, CircuitId} from "@0xpolygonid/js-sdk";


async function main(){
    console.log("Hello tsc back");
    const dataStorage = {
        credential: new CredentialStorage(new InMemoryDataSource<W3CCredential>()),
        identity: new IdentityStorage(
          new InMemoryDataSource<Identity>(),
          new InMemoryDataSource<Profile>()
        ),
        mt: new InMemoryMerkleTreeStorage(40),
        states: new EthStateStorage(defaultEthConnectionConfig),
        };
}

(async function (){
    await main();
})();