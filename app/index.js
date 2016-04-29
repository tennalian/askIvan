import React from 'react';
import ReactDOM from 'react-dom';
import Faq from './faq';
import  './styles.scss';

var faq = [
	'И?',
	'А если подумать?',
	'Хммм..',
	'Ты уверена?',
	'А потом?',
	'Так, а суть вопроса в чем?',
	'Подумай хорошо!',

];



ReactDOM.render(<Faq data={faq}/>, document.getElementById('app'));
