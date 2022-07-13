import { useEffect, useState } from "react";
import { api } from "../../server/api";

type dados = {
	timeX?: string;
	timeY?: string;
	golsX: number;
	golsY: number;
};

export const Placar = ({ timeX, golsX, timeY, golsY}: dados) => {

	const [time1, setTime1] = useState("");
	const [nome1, setNome1] = useState("");
	const [time2, setTime2] = useState("");
	const [nome2, setNome2] = useState("");

	useEffect(() => {
		api.get(`/times/buscarTimesId/${timeX}`)
			.then((res) => {
				setTime1(res.data.escudo);
				setNome1(res.data.nome);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);

	useEffect(() => {
		api.get(`/times/buscarTimesId/${timeY}`)
			.then((res) => {
				setTime2(res.data.escudo);
				setNome2(res.data.nome);
			})
			.catch((err) => {
				console.log(err);
			});
	},[]);

	return (
		<figure className="flex flex-row flex-wrap items-center justify-between">
			<div className="w-6">
				<img src={time1} alt={nome1} />
			</div>
			<p className="text-xl font-home font-semibold tracking-widest">
				{golsX} : {golsY}
			</p>
			<div className="w-6">
				<img src={time2} alt={nome2} />
			</div>
		</figure>
	);
};
