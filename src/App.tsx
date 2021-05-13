import GlobalStyle from './styles/global';
import { Container, ContainerTwo } from './styles/Container';

import MenuLateral from './components/MenuLateral/index';
import MenuTopo from './components/MenuTopo/index';
import MenuCard from './components/MenuCard/index';


function App() {
	return (

	<div className="App">
		<>
			<Container>
				<GlobalStyle /> 
				<MenuLateral />
				<ContainerTwo>
					<MenuTopo />
					<MenuCard />
				</ContainerTwo>
			</Container>
		</>
	</div>
  );
}

export default App;
