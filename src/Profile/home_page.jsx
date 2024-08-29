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
								author: 'egorchik130107@hse.ru',
								avatar:
									'https://avatars.mds.yandex.net/i?id=325916f59923af56668867b92490d6eda066ef6c-5859361-images-thumbs&n=13',
								reason: '',
								status: 'accepted',
								subjects: ['Информатика (икт)', 'Технология (труд)'],
								text: 'В рамках проекта планируется разработать конструкцию конвейерной ленты, изготовить опытный образец. Конвейерная лента должна транспортировать груз в обоих направлениях (вперед, назад) на заданное в миллиметрах расстояние. Кроме того, необходимо изготовить цифровой двойник конвейерной ленты и написать программу для управления конвейерной лентой.',
								title: 'Конвейерная лента',
							},
						}}
						isProfile={false}
					/>
				</div>
				<div className='sample'>
					<Idea_card
						obj={{
							data: {
								author: 'mbolshakov@mail.ru',
								avatar:
									'https://cdn11.bigcommerce.com/s-a3z611ns/images/stencil/1280x1280/products/8931/7254/am3157384-b__13467.1529771662.jpg?c=2',
								reason: '',
								status: 'accepted',
								subjects: ['Математика'],
								text: 'Онлайн-школа дополнительного образования. Здесь учатся школьники и учителя, студенты вузов и все, кто хочет изучить предметы за пределами школьной программы и разобраться в сложных задачах. Ученики самостоятельно выстраивают индивидуальную траекторию, определяют темп и удобное время учёбы.',
								title: 'Онлайн-курсы по математике ',
							},
						}}
						isProfile={false}
					/>
				</div>
			</div>
			<h2 className='low'>
				Зарегистрируйся прямо сейчас! И получи доступ к десяткам идей!
			</h2>
		</div>
	)
}

function remember(){
	;<div className='sample'>
		<Idea_card
			obj={{
				data: {
					author: 'mbolshakov@mail.ru',
					avatar:
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7yEiUpUs1xhWkr2CvHC_1ClkVPkJLlzaLQ&s',
					reason: '',
					status: 'accepted',
					subjects: ['Биология', 'Экология'],
					text: 'Мониторинг состояния зеленых насаждений или фитомониторинг широко применяется в оценке качества городской среды. Достаточно правильно выбрать площадки для исследования, составит схему и характеристики. При выполнении исследования внимание акцентируется на следующих аспектах: 1. Отношение озеленённой площади к численности, м2/чел. 2. Отношение деревьев и кустарников к населения, ед. деревьев на человека. 3. Оценка жизненного состояния растений. 4. Равномерность распределения (район примерно делится на площадки 2*2 км, там определяются наличие площадей зелёных насаж',
					title: 'Фитомониторинг рекреационных зон промышленных городов',
				},
			}}
			isProfile={false}
		/>
	</div>
}

export default App
