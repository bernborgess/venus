import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@mui/material';

import {
  Assignment as AssignmentIcon,
  BarChart as BarChartIcon,
  Dashboard as DashboardIcon,
  Layers as LayersIcon,
  People as PeopleIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import { ReactElement } from 'react';

interface Item {
  text: string;
  icon: ReactElement
}

const mainItems: Item[] = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Orders", icon: <ShoppingCartIcon /> },
  { text: "Customers", icon: <PeopleIcon /> },
  { text: "Reports", icon: <BarChartIcon /> },
  { text: "Integrations", icon: <LayersIcon /> }
]

export const mainListItems = (
  <>
    {mainItems.map((item) => (
      <ListItemButton>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
    {/* <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);
