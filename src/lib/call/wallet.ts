import API from "../api";

interface IWalletBody {
  walletName: string;
  beginning_balance: number;
}

export const CreateWallet = async (body: IWalletBody) => {
  return await API.post("wallet-settings", body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
