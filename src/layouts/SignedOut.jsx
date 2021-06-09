import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}>Giriş Yap</Button>
                <Button primary style={{ marginLeft: "0.5em" }}>Çıkış Yap</Button>
            </Menu.Item>

        </div>
    )
}
