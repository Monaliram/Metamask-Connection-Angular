import { Component } from '@angular/core';
declare let window: any

@Component({
  selector: 'app-metamask-connect',
  templateUrl: './metamask-connect.component.html',
  styleUrls: ['./metamask-connect.component.scss']
})
export class MetamaskConnectComponent {

address:any
  async connectToMetamaskWallet(){
    let ethereum = window['ethereum']
    if (typeof ethereum !== 'undefined') {
        if (ethereum) {
            const data = [
                {
                    chainId: '0x13881',
                    chainName: 'Polygon', 
                    nativeCurrency: {
                        name: 'MATIC',
                        symbol: 'MATIC',
                        decimals: 18
                    },
                    rpcUrls: ['https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78'],
                    blockExplorerUrls: ['https://mumbai.polygonscan.com']
                }
            ]
            const tx = await ethereum
                .request({ method: 'wallet_addEthereumChain', params: data })
                .catch()
            if (tx) {
            }
            try {
                ethereum
                    .request({
                        method: 'wallet_requestPermissions',
                        params: [{ eth_accounts: {} }]
                    })
                    .then((permissions: any) => {
                        const accountsPermission = permissions.find(
                            (permission: any) =>
                                permission.parentCapability === 'eth_accounts'
                        )
                        if (accountsPermission) {

                            ethereum
                                .request({ method: 'eth_requestAccounts' })
                                .then(async(address: any) => {
                                    if (address.length == 1) {
                                        this.address = address[0];
                                     
                                    }
                                })
                        }
                    })
                    .catch((error: any) => {
                        if (error.code === 4001) {
                        } else {
                            if (error.code == -32002) {
                            }
                        }
                    })
                await ethereum.request({ method: 'eth_requestAccounts' })

            } catch (error) {
            }
        }
    } else {
    }
  }
  ngOnInit() {
    
  }
 
}
