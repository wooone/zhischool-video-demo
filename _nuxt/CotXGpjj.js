import{g as e}from"./rIQXTI0U.js";const t=e`
  mutation SendChatMessage(
    $file: Upload
    $authorizedResource: Int
    $chatroomId: UUID!
    $content: String
) {
    sendChatMessage(
      form: {
        file: $file
        authorizedResource: $authorizedResource
        chatroomId: $chatroomId
        content: $content
      }
    ) {
        chatroomId
        mime
        content
        id
        created
        user {
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
`,a=e`
  mutation solveQuestion($questionId: Int!) {
    solveQuestion(questionId: $questionId)
  }
`;export{t as S,a};
