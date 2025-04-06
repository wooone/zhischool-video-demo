import{g as e}from"./rIQXTI0U.js";const d=e`
  query ListMyQuestions {
    listMyQuestions {
      description
      hasUnreadMessages
      subject
      image
      authorizedResource
      id
      status
      assignedAt
      acceptedAt
      rejectedAt
      solvedAt
      chatroom {
        type
        authorizedResource
        id
        chatroomId
        created
        updated
        owner {
          email
          account
          name
          suspended
          password
          photo
          id
          created
          updated
          roles {
            name
            description
            isAdmin
            id
          }
        }
      }
      assignedBy {
        email
        account
        name
        suspended
        password
        photo
        id
        created
        updated
        roles {
          name
          description
          isAdmin
          id
        }
      }
      assignee {
        email
        account
        name
        suspended
        password
        photo
        id
        created
        updated
      }
    }
  }
`;export{d as L};
