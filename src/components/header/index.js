import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div class="collapse bg-dark" id="navbarHeader">
					<div class="container">
					<div class="row">
						<div class="col-sm-8 col-md-7 py-4">
						<h4 class="text-white">About</h4>
						<p class="text-muted">Hey, my name is Armin and I'm fluent in many programming- and programming-regarding languages and have worked with many common frameworks. I am a fullstack-developer from Germany for the german company imbus AG. imbus is a leading solution partner for professional software testing and intelligent software quality assurance. I am working on internal programs to keep track of working hours, manage projects and many more.</p>
						</div>
						<div class="col-sm-4 offset-md-1 py-4">
						<h4 class="text-white">Contact</h4>
						<ul class="list-unstyled">
							<li><a href="https://twitter.com/MachigattaDE" class="text-white">Follow on Twitter</a></li>
							<li><a href="https://github.com/Machigatta" class="text-white">Find me on GitHub</a></li>
							<li><a href="https://discordapp.com/users/131339765189443584" class="text-white">Contact me on Discord</a></li>
							<li><a href="mailto:contact@machigatta.com" class="text-white">Email me</a></li>
						</ul>
						</div>
					</div>
					</div>
				</div>
				<div class="navbar navbar-light text-dark">
					<div class="container d-flex justify-content-between">
					<a href="#" class="navbar-brand d-flex align-items-center">
						
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
						<div class="spinner-burger-master">
								<input type="checkbox" id="spinner-burger" />
								<label for="spinner-burger" class="spinner-burger-label">
									<div class="sp diagonal part-1"></div>
									<div class="sp horizontal"></div>
									<div class="sp diagonal part-2"></div>
								</label>
							</div>
					</button>
					</div>
				</div>
			</header>
		);
	}
}
