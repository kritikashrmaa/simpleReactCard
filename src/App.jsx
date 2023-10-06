
import './App.css'
import ItemCardList from './components/ItemCardList';

function App () {
  
  const items = [
  {
    imageUrl: 'htttps://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1',
    description: 'Item 1 Description',
  },
  {
    imageUrl: 'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?pid=ImgDet&rs=1',
    description: 'Item 2 Description',
  },
  // Add more items as needed
];
  

  return (
    <>
         <h1>REACH HUB</h1>
         <ItemCardList items={items} />
    </>
  )
}

export default App
