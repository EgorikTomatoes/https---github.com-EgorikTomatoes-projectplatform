import { Form } from 'react-router-dom'
import './home_page.css'
import Idea_card from '../ideas/idea_card'

function App() {
	return (
		<div>
			<div className='text-container'>
				<h1>ПЛАТФОРМА ПРОЕКТОВ</h1>
				<h5>Powered by Egorchik & Ilya</h5>
			</div>
			<div className='descriptions-container'>
				<h1>Создавай и делись своими проектами!</h1>
			</div>
			<div className='samples-container'>
				<div className='sample'>
					<Idea_card
						obj={{
							data: {
								author: 'bcd@gmail.com',
								avatar: 'https://def4onki.ru/wp-content/uploads/2021/09/jy.jpg',
								reason: '',
								status: 'accepted',
								subjects: [
									'Основы духовно-нравственных культур народов россии',
								],
								text: 'Это что, НОВЫЙ ДИЗАЙН???',
								title: 'Новая идея Игорика',
							},
						}}
						isProfile={false}
					/>
				</div>
				<div className='sample'>
					<Idea_card
						obj={{
							data: {
								author: 'bcd@gmail.com',
								avatar: 'https://def4onki.ru/wp-content/uploads/2021/09/jy.jpg',
								reason: '',
								status: 'accepted',
								subjects: [
									'Основы духовно-нравственных культур народов россии',
								],
								text: 'Это что, НОВЫЙ ДИЗАЙН???',
								title: 'Новая идея Игорика',
							},
						}}
						isProfile={false}
					/>
				</div>
				<div className='sample'>
					<Idea_card
						obj={{
							data: {
								author: 'bcd@gmail.com',
								avatar: 'https://def4onki.ru/wp-content/uploads/2021/09/jy.jpg',
								reason: '',
								status: 'accepted',
								subjects: [
									'Основы духовно-нравственных культур народов россии',
								],
								text: 'Это что, НОВЫЙ ДИЗАЙН???',
								title: 'Новая идея Игорика',
							},
						}}
						isProfile={false}
					/>
				</div>
			</div>
            <div className='description'>
                Более сотни проектов,<br/>
                На более чем 40 тем!
            </div>
		</div>
	)
}

export default App
