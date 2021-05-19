import { useState } from 'react'
import { useRouter } from 'next/router'
import { NavigationTab } from './index'
import MobileNavigation from '../../UIkits/MobileNavigation'
import ActiveOrders from '../../../public/img/ForApp/icons/activeOrders.svg'
import OrderHistory from '../../../public/img/ForApp/icons/orderHistory.svg'
import Menu from '../../../public/img/ForApp/icons/menu.svg'
import Account from '../../../public/img/ForApp/icons/account.svg'
import Contact from '../../../public/img/ForApp/icons/contact.svg'

const Header = () => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const closeNav = () => {
    setMenuIsOpen(false)
  }

  const selectCheck = (path) => {
    if (path === router.pathname) return true
    return false
  }

  return (
    <div>
      <MobileNavigation menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} dashboard>
        <NavigationTab
          href="/dashboard"
          icon={<ActiveOrders />}
          label="Active Orders"
          onClick={closeNav}
          selected={selectCheck('/dashboard')}
        />
        <NavigationTab
          href="/dashboard/menu"
          icon={<Menu />}
          label="Menu"
          onClick={closeNav}
          selected={selectCheck('/dashboard/menu')}
        />
        <NavigationTab
          href="/dashboard/order-history"
          icon={<OrderHistory />}
          label="Order History"
          onClick={closeNav}
          selected={selectCheck('/dashboard/order-history')}
        />
        <NavigationTab
          href="/dashboard/account"
          icon={<Account />}
          label="Account"
          onClick={closeNav}
          selected={selectCheck('/dashboard/account')}
        />
        <NavigationTab
          href="/dashboard/contact"
          icon={<Contact />}
          label="Contact"
          onClick={closeNav}
          selected={selectCheck('/dashboard/contact')}
        />
      </MobileNavigation>
    </div>
  )
}

export default Header
