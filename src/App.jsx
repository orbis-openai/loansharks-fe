import { Route, Routes, Navigate } from 'react-router-dom'
import { BaseLayout } from './components/common'
import { HomePage, NotFoundPage } from './pages'
import AppLayout from './components/common/AppLayout'
import LendLayout from './components/App/lend/LendLayout'
import BorrowLayout from './components/App/borrow/BorrowLayout'
import { LendAssetsPage, LendLoanPage, LendOffersPage, PrivateOfferPage } from './pages/app/lend'
import {
  BorrowAssetsPage,
  BorrowBundlePage,
  BorrowLoanPage,
  BorrowOffersPage,
} from './pages/app/borrow'
import CollectionsLayout from './components/App/collections/CollectionLayout'
import { CollectionsPage } from './pages/app/collections'
import StatsLayout from './components/App/stats/StatsLayout'
import { StatsDAIPage, StatsUSDCPage, StatsWETHPage } from './pages/app/stats'
import AddressDetailComponent from './components/App/lend/AssetDetailsComponent'
import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <Routes>
      <Route path='/app' element={<AppLayout />}>
        <Route index element={<Navigate to='/app/lend' replace={true} />} />
        <Route path='lend' element={<LendLayout />}>
          <Route index element={<Navigate to='/app/lend/assets' />} />
          <Route path='assets' element={<LendAssetsPage />} />
          <Route path='loans' element={<LendLoanPage />} />
          <Route path='offers' element={<LendOffersPage />} />
        </Route>
        <Route path='borrow' element={<BorrowLayout />}>
          <Route index element={<Navigate to='/app/borrow/assets' />} />
          <Route path='assets' element={<BorrowAssetsPage />} />
          <Route path='loans' element={<BorrowLoanPage />} />
          <Route path='offers' element={<BorrowOffersPage />} />
          <Route path='bundles' element={<BorrowBundlePage />} />
        </Route>
        <Route path='collections' element={<CollectionsLayout />}>
          <Route index element={<CollectionsPage />} />
        </Route>
        <Route path='stats' element={<StatsLayout />}>
          <Route index element={<StatsWETHPage />} />
          <Route path='dai' element={<StatsDAIPage />} />
          <Route path='usdc' element={<StatsUSDCPage />} />
        </Route>
        <Route path='blog' element={<HomePage />} />
        <Route path='faq' element={<HomePage />} />
        <Route path='assets/private-offer' element={<PrivateOfferPage />} />
        <Route path='assets/:address/:id' element={<AddressDetailComponent />} />
        {/* <Route path='*' element={<Navigate to='/app/lend' replace={true} />} /> */}
      </Route>
      <Route path='/' element={<BaseLayout />}>
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
