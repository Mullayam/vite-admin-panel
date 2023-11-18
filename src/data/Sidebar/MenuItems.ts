import {   GanttChartSquare, MessageSquareDashed, MessagesSquare, SendHorizontalIcon } from "lucide-react";
import { Icons } from "@/components/icons";
export const SidebarMenuItems = [
    {
        name: "Dashboard",
        path: "/home",
        icon: Icons.PieChart
    },
    {
        name: "Products",
        path: "/e-commerce/products",
        icon: Icons.HiShoppingBag,
    },
    {
        name: "Users list",
        path: "/users/list",
        icon: Icons.HiUsers,
    },
    {
        name: "SMS Panel",         
        icon: MessageSquareDashed,
        path:"/sms/panel",
        child:[
            {
                name: "SMS Statistics",
                path: "/sms/statistics",
                icon:MessagesSquare,
            },
            {
                name: "SMS Report",
                path: "/sms/report",
                icon: GanttChartSquare,
            },
            {
                name: "Send Message",
                path: "/sms/send",
                icon: SendHorizontalIcon,
            },
        ]
    },
   
    {
        name: "More",         
        icon: Icons.Pages,
        path:"#",
        child:[
            {
                name: "Sms Report",
                path: "/sms/report",
                icon: null,
            }
        ]
    },

]
export const MenuItemsGroup = [
    {
        name: "Docs",
        path: "/",
        icon: Icons.HiClipboard,
    },
    {
        name: "Components",
        path: "/e-commerce/products",
        icon: Icons.HiCollection,
    },
    {
        name: "Help",
        path: "/users/list",
        icon: Icons.HiInformationCircle,
    },

]