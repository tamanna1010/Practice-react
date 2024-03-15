import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  ChatBubbleBottomCenterIcon,
  PhoneIcon,
  HeartIcon,
  UsersIcon,
  CogIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const sidebarArray = [
  { Icon: HomeIcon, name: "Home Page" },
  { Icon: PhoneIcon, name: "Calls" },
  { Icon: UsersIcon, name: "Agents" },
  { Icon: HeartIcon, name: "Emotions" },
  { Icon: ChatBubbleBottomCenterIcon, name: "AI Chatbot" },
];

const Sidebar = () => {
  return (
    <Card className="h-[100vh] w-full max-w-[260px] p-4 bg-app-layover text-button-purple">
      <div>
        <div className="flex justify-between items-center">
          <Typography variant="h5" className="w-[86px]">
            Dummy
          </Typography>
          <CogIcon className="h-5 w-5" />
        </div>
      </div>
      <List>
        {sidebarArray.map(({ Icon, name }) => {
          return (
            <ListItem key={name}>
              <ListItemPrefix>
                <Icon className="h-5 w-5" color="white" />
              </ListItemPrefix>
              <p className="text-white">{name}</p>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
export default Sidebar;
