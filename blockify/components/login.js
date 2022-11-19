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
  loginPage: `w-screen h-screen bg-linear-gradient(to bottom, #20aaa7b0, #534e4eb0,#0b5e70 flex justify-center flex-col items-center`,
  text: `text-4xl style-italic text-white mb-10`,
}
