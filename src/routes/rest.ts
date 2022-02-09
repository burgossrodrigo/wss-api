import express, { Request, Response } from "express"
import { ChainId, Token, WETH, Fetcher, Route } from "@uniswap/sdk"


const router = express.Router();
const chainId = ChainId.MAINNET;
const HOKK_ADDRESS = "0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8";
const HOKK = new Token(chainId, HOKK_ADDRESS, 18, "HOKK", "Hokkaido Inu")





/*

const wethPriceUsd = async () => {
    
    await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT')
    .then(res => res.json())
    .then(wethPrice => console.log(wethPrice));
    
    return wethPrice
}

*/

async function getPair () {

    const pair = await Fetcher.fetchPairData(HOKK, WETH[chainId]);
    const route = new Route([pair], WETH[chainId]);
    const price = route.midPrice.toFixed(9)

    return price

}

async function livePrice() {
    var total = await getPair()
    return total
}



router.get('/hokk', [], async (req: Request, res: Response) => {
    const pair = await Fetcher.fetchPairData(HOKK, WETH[chainId]);
    const route = new Route([pair], WETH[chainId]);
    const price = route.midPrice.toFixed(9);
    return res.json(price);
})

export { router as hokkHuobiRouter }



