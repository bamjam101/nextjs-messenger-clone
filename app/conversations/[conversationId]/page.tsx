import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import MessageForm from "./components/MessageForm";

interface IParams {
  conversationId: string;
}
const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);

  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }
  return (
    <div className="lg:w-full lg:pl-[400px] h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <MessageForm />
      </div>
    </div>
  );
};

export default ChatId;
