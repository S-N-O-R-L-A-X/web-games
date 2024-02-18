import React, { useEffect, useRef } from "react";

interface RufflePlayerProps {
	address: string;
}

export default function RufflePlayer(props: RufflePlayerProps) {
	const { address } = props;
	const ref = useRef<HTMLDivElement>(null);
	useEffect(()=>{
		// @ts-ignore
		const ruffle = window.RufflePlayer.newest();
		const player = ruffle.createPlayer();
		player.load(address);
		ref.current!.appendChild(player);
	},[])

	return (
		<div ref={ref} >
			
		</div>
	)
}