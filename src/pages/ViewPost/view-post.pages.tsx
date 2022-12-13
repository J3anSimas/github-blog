import Header from './Header/header.component'
import { ViewPostContainer } from './view-post.styles'
import ReactMarkdown from 'react-markdown'
export default function ViewPost(): JSX.Element {
  return (
    <ViewPostContainer>
      <Header />
      <ReactMarkdown>
        {`
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.\r\n\r\n[Dynamic
        typing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#dynamic_typing)\r\nJavaScript
        is a loosely typed and dynamic language. Variables in JavaScript are not
        directly associated with any particular value type, and any variable can
        be assigned (and re-assigned) values of all types:\r\n\r\nlet foo = 42;
        // foo is now a number\r\nfoo = 'bar'; // foo is now a string\r\nfoo =
        true; // foo is now a boolean`}
      </ReactMarkdown>
    </ViewPostContainer>
  )
}
