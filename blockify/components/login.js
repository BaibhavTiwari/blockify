import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Payment } from './payment'

const Login = () => {
  const wallet = useWallet()

  /** show payment UI if wallet is connected */
  if (wallet.connected) return <Payment />

  return (
    <div className={styles.loginPage}>
      <p className={styles.text}>Login to access this app</p>
      <WalletMultiButton />
    </div>
  )
}

export default Login

const styles = {
  loginPage: `  background-color: #0f0e13;
    background-image:
        radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%),
        radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
        radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%),w-screen h-screen bg-white flex justify-center flex-col items-center`,
  text: `text-4xl text-black mb-10`,
}
