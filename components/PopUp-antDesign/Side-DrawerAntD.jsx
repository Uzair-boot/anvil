import React, { useState } from 'react'
import 'antd/dist/antd.css'
// import "./index.css";
import { Button, Drawer } from 'antd'

const SideDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const showDrawer = () => {
    setOpenDrawer(true)
  }

  const onClose = () => {
    setOpenDrawer(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        operDrawer
      </Button>
      <Drawer
        title="Details"
        placement="right"
        onClose={onClose}
        open={openDrawer}
      >
        <p> CheckIn Name</p>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#OOOOOO',
          }}
        >
          {/* <img
            src="http://cdn.eatsy.net/media/restaurant/client/gp290dwv5xuc67s9/img/consumer_restaurant_list_logo"
            alt="CheckIn Image"
          /> */}
        </div>
      </Drawer>
    </>
  )
}

export default SideDrawer
