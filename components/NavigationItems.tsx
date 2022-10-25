import { Button } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { navigationItems } from "../utils/navigation"

const NavigationItems = () => {
    return (
        <>
            {navigationItems.map((item, index) => (
                <Button variant="subtle" key={index} component={NextLink} href={item.url}>
                    {item.name}
                </Button>
            ))}
        </>
    )
}

export default NavigationItems