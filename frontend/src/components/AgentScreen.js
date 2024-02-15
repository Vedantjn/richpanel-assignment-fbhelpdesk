import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser, AiOutlineSetting, AiOutlineMenu, AiOutlineReload, AiOutlinePhone, AiOutlineProfile } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const conversationData = [
    {
        id: 1,
        name: 'Vedant Jain',
        messages: ['Facebook DM', 'Awesome Product!'],
        email: 'vedant.jain.indore@gmail.com',
        firstName: 'Vedant',
        lastName: 'Jain'
    },
    {
        id: 2,
        name: 'Amitabh Bacchan',
        messages: ['FaceBook Post', 'Available in store?'],
        email: 'amitabh@gmail.com',
        firstName: 'Amitabh',
        lastName: 'Bacchan'
    },
];


const AgentScreen = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);

    const handleConversationSelect = (conversation) => {
        setSelectedConversation(conversation);
    };

    return (
        <Container>
            <Navigation>
                <NavItem><AiOutlineHome size={24} /></NavItem>
                <NavItem><AiOutlineMessage size={24} /></NavItem>
                <NavItem><AiOutlineUser size={24} /></NavItem>
                <NavItem><AiOutlineSetting size={24} /></NavItem>
                <UserImage>
                    <img src="/images/VedantJain.jpeg" alt="" />
                    <OnlineIndicator />
                </UserImage>
            </Navigation>

            <Conversations>
                <ConversationHeader>
                    <h2><ConversationsMenuIcon size={24} /> Conversations</h2>
                    <ReloadIcon />
                </ConversationHeader>
                <ConversationList>
                    <ul>
                        {conversationData.map((conversation) => (
                            <Conversation key={conversation.id} conversation={conversation} onSelect={handleConversationSelect} />
                        ))}
                    </ul>
                </ConversationList>
            </Conversations>

            <ConversationThread>
                <ThreadHeader>
                    <h2>{selectedConversation ? selectedConversation.name : "Conversation Thread"}</h2>
                </ThreadHeader>
                <ThreadMessages>
                </ThreadMessages>
                <ThreadInput>
                    <input type="text" placeholder={selectedConversation ? `Message ${selectedConversation.name}` : 'Message...'} />
                </ThreadInput>

            </ConversationThread>

            <CustomerProfile>
                <div>
                    <ProfileCard>
                        {selectedConversation ? (
                            <img src={`/images/${selectedConversation.name.split(' ').join('')}.jpeg`} alt="Profile" />
                        ) : (
                            <img src="/images/NoUser.jpg" alt="No User" />
                        )}
                        <div>
                            <strong>{selectedConversation ? selectedConversation.name : "Select a conversation"}</strong>
                            {/* <OnlineIndicator />  */}
                        </div>
                        <div>
                            <ButtonWithIconAndText><AiOutlinePhone size={24} /><ButtonText>Call</ButtonText></ButtonWithIconAndText>
                            <ButtonWithIconAndText><AiOutlineProfile size={24} /><ButtonText>Profile</ButtonText></ButtonWithIconAndText>
                        </div>
                    </ProfileCard>
                </div>
                <div>
                    {selectedConversation && (
                        <CustomerDetailsCard>
                            <CustomerDetailsHeading>Customer Details</CustomerDetailsHeading>
                            <KeyValueWrapper><strong>Email:</strong> {selectedConversation.email}</KeyValueWrapper>
                            <KeyValueWrapper><strong>First Name:</strong> {selectedConversation.firstName}</KeyValueWrapper>
                            <KeyValueWrapper><strong>Last Name:</strong> {selectedConversation.lastName}</KeyValueWrapper>
                            <ViewMoreDetails>View more details</ViewMoreDetails>
                        </CustomerDetailsCard>
                    )}
                </div>
            </CustomerProfile>
        </Container>
    );
};

const Conversation = ({ conversation, onSelect }) => {
    return (
        <ConversationItem onClick={() => onSelect(conversation)}>
            <input type="checkbox" />
            <ConversationInfo>
                <ConversationHeading>{conversation.name}</ConversationHeading>
                <ConversationMessage>{conversation.messages[0]}</ConversationMessage>
                <ConversationMessage className='subMessage'>{conversation.messages[1]}</ConversationMessage>
            </ConversationInfo>
        </ConversationItem>
    );
};


const Container = styled.div`
    display: flex;
    background-color: #f0f0f0;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3b5998;
    height: 100vh;
    width: 5%;
`;

const UserImage = styled.div`
    position: relative;
    width: 3rem; 
    height: 3rem; 
    margin: auto;
    margin-bottom: 1rem;
    cursor : pointer;
  
    img {
        width: 100%; 
        height: 100%; 
        border-radius: 50%; 
    }
`;

const OnlineIndicator = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #32CD32;
    border-radius: 50%;
    bottom: 0;
    right: 0;
`;

const Conversations = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%; 
    background-color: white;
    border-right: 4px solid #f0f0f0; 
`;


const ConversationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const ConversationList = styled.div`
    background-color: white;
    border-radius: 5px;
    ${'' /* margin-right : 5px; */}
    ${'' /* margin-left : 5px; */}

    ul{
        padding : 0.25em;
        ${'' /* padding-left : 0.75rem; */}
    }
`;

const ConversationThread = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow Conversation Thread to grow and occupy remaining space */
    background-color: #ffffff; 
    border-right: 4px solid #f0f0f0;

`;

const ThreadHeader = styled.div`
    background-color: white;
    padding: 10px;
`;

const ThreadMessages = styled.div`
    flex-grow: 1;
    background-color: #f0f0f0; 
    padding: 20px;
    overflow-y: auto; /* Add scroll when messages overflow */
`;

const ThreadInput = styled.div`
    background-color: #f0f0f0; 
    padding: 30px;
    input {
        width: calc(100% - 40px); 
        padding: 20px;
        border: none;
        border-radius: 5px;
        outline: none;
    }
`;

const ConversationItem = styled.li`
    margin-bottom: 20px;
    cursor: pointer;
    padding: 2px 0px;
    display: flex;
    align-items: flex-start; 
    width: 100%; 

    &:hover {
        background-color: #ddd;
    }

    input {
        margin-right: 10px; 
    }
`;

const ConversationInfo = styled.div`
    margin-left: 10px;
    flex-grow: 1; 
`;

const ConversationHeading = styled.h3`
    margin: 0;
`;

const ConversationMessage = styled.p`
    margin: 5px 0;
`;

const CustomerProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: #EAEAEA; 
    padding: 2px;
    position: relative; 

    & > div {
        margin-bottom: 20px; 
    }
`;

const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;

    img {
        margin-top : 2rem;
        margin-bottom: 1rem; 
        border-radius: 50%;
        width: 50px; 
        height: 50px; 
    }

    div {
        display: flex;
        align-items: center;
        margin-bottom : 2rem;
    }

    button {
        margin-left: 10px;
        padding : 0.5rem;
    }

    background-color : white;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    background-color : white;

    img {
        width: 50px; 
        height: 50px;
        border-radius: 50%;
    }
`;

const CustomerDetailsCard = styled.div`
  margin: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 80%; 
    padding-left: 1rem;
    padding-right : 1rem; 
    padding-bottom : 1rem;

    strong {
        margin-bottom: 10px;
    }

    background-color : white;
`;

const ButtonWithIconAndText = styled.button`
    background-color: transparent;
    border: 1px solid #ccc;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.5rem;
`;

const ButtonText = styled.span`
    margin-left: 5px;
`;


const KeyValueWrapper = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-bottom: 5px;
    width: 100%;

    > strong {
        margin-right: 10px;
        flex-shrink: 0; /* Prevent the strong tag from shrinking */
        font-weight: 300; /* Decrease font weight */
    }

    > span {
        flex-grow: 1; /* Allow the value to take up remaining space */
        text-align: right;
    }

`;



const CustomerDetailsHeading = styled.h3`
    margin-bottom: 10px;
`;


const ViewMoreDetails = styled.a`
    color: #3b5998;
    text-decoration: none;
    cursor: pointer;
`;


const NavItem = styled.div`
    margin: 1rem;
    color : white;
    cursor : pointer;
`;

const ConversationsMenuIcon = styled(AiOutlineMenu)`
    cursor : pointer;
    margin-right : 20px;
    margin-left : 20px
`;

const ReloadIcon = styled(AiOutlineReload)`
    cursor: pointer;
    margin-right : 20px;
`;

export default AgentScreen;
