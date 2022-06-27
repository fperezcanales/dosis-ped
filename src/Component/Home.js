import React from 'react';
import './form.css'

const initialValues = {
	peso: 0,
	dosis: 0,
	presentacion1: 0,
	presentacion2: 0,
	resultado: 0,

	errors: {
		peso: undefined,
		dosis: undefined,
		presentacion1: undefined,
		presentacion2: undefined,
	}
}
export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			...initialValues
		};

		this.handleChange = this.handleChange.bind(this);
		this.validateAllFields = this.validateAllFields.bind(this);
		//this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	validateAllFields() {
		const {
			peso,
			dosis,
			presentacion1,
			presentacion2,
		} = this.state;

		let message = {
			peso: undefined,
			dosis: undefined,
			presentacion1: undefined,
			presentacion2: undefined,
		};

		if (peso <= 0) {
			message['peso'] = 'Peso es obligatorio'
		}
		if (dosis <= 0) {
			message['dosis'] = 'Dosis es obligatorio'
		}
		if (presentacion1 <= 0) {
			message['presentacion1'] = 'Presentación (MG) es obligatorio'
		}
		if (presentacion2 <= 0) {
			message['presentacion2'] = 'Presentación (ML) es obligatorio'
		}
		this.setState({
			errors: message
		})
	}

	render() {
		const style = {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}

		return (
			<div>
				<div style={style}>
					<div  >
						<div className={'container '}>
							<h4 className={'teal-text'}
								style={{ textAlign: 'center' }}
							>
								Cálculo dosis pediátrica
							</h4>

							<form>
								<div style={{ margin: '1rem 0'}}>
									<label>
										Peso:
									<input
											type="number"
											name="peso"
											required
											placeholder='(Kg)'
											value={this.state.peso}
											onChange={this.handleChange}
										/>
										{this.state.errors['peso']}
									</label>
								</div>

								<div style={{ margin: '1rem 0'}}>
									<label>
										Dosis: <input
											type="number"
											name="dosis"
											placeholder='(mg/kg/dosis)'
											value={this.state.dosis}
											onChange={this.handleChange}
										/>
										{this.state.errors['dosis']}
									</label>
								</div>

								<div style={{
									marginTop: '1rem',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between'
								}}>

									<label style={{ maxWidth: '40%' }}>
										Presentación: <input
											type="number"
											name="presentacion1"
											placeholder='(mg)'
											value={this.state.presentacion1}
											onChange={this.handleChange}
										/>
										{this.state.errors['presentacion1']}
									</label>

									<label style={{ maxWidth: '40%' }}>
										/ <input
											type="number"
											name="presentacion2"
											placeholder='(ml)'
											value={this.state.presentacion2}
											onChange={this.handleChange}
										/>
										{this.state.errors['presentacion2']}
									</label>
								</div>


								<div style={{
									marginTop: '1rem',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between'
								}}>

									<div style={{ maxWidth: '30%' }}>
										<button
											type="button"
											className="btn-secondary"
											onClick={() => {
												this.setState({
													...initialValues
												})
											}}
										>
											Limpiar
											</button>
									</div>

									<div style={{ maxWidth: '50%' }}>
										<button type="button"
											className="btn btn-primary"
											onClick={() => {

												const {
													peso,
													dosis,
													presentacion1,
													presentacion2
												} = this.state;

												this.validateAllFields()
												// if (this.state.dosis <= 0) {
												// 	this.setState({
												// 		validation: 'Dosis es obligatorio'
												// 	})
												// 	return;
												// }

												// this.setState({
												// 	resultado: (((peso * dosis) * presentacion2) / presentacion1).toFixed(1)
												// })
											}}
										>Calcular</button>

									</div>
								</div>

								{this.state.resultado > 0 &&
									<div className="alert card blue lighten-4 blue-text text-darken-3">
										<div className="card-content">
											<p>Resultado: {this.state.resultado} ML.</p>
										</div>
									</div>
								}

							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}