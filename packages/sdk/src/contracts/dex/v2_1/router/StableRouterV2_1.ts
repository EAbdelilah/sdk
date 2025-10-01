import { type ContractProvider, toNano } from "@ton/ton";

import type { AddressType } from "../../../../types";
import { DEX_TYPE } from "../../constants";
import { StablePoolV2_1 } from "../pool/StablePoolV2_1";
import { BaseRouterV2_1, type BaseRouterV2_1Options } from "./BaseRouterV2_1";

export class StableRouterV2_1 extends BaseRouterV2_1 {
  public static readonly dexType = DEX_TYPE.Stable;

  public static override readonly gasConstants = {
    ...BaseRouterV2_1.gasConstants,
    swapJettonToJetton: {
      gasAmount: toNano("0.329"),
      forwardGasAmount: toNano("0.269"),
    },
    swapJettonToTon: {
      gasAmount: toNano("0.329"),
      forwardGasAmount: toNano("0.269"),
    },
    swapTonToJetton: {
      forwardGasAmount: toNano("0.329"),
    },
  };

  constructor(
    address: AddressType,
    { gasConstants, ...options }: BaseRouterV2_1Options = {},
  ) {
    super(address, {
      ...options,
      gasConstants: {
        ...StableRouterV2_1.gasConstants,
        ...gasConstants,
      },
    });
  }

  public override async getPool(
    provider: ContractProvider,
    params: {
      token0: AddressType;
      token1: AddressType;
    },
  ) {
    const poolAddress = await this.getPoolAddressByJettonMinters(
      provider,
      params,
    );

    return StablePoolV2_1.create(poolAddress);
  }
}
