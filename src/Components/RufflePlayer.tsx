import React, { useEffect, useRef } from "react";

interface RufflePlayerProps {
	address: string;
}

export default function RufflePlayer(props: RufflePlayerProps) {
	const { address } = props;
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// @ts-ignore
		const ruffle = window.RufflePlayer.newest();
		const player = ruffle.createPlayer();
		ref.current!.appendChild(player);
		player.load(address);
	}, [])

	return (
		<div ref={ref} />
	)
}