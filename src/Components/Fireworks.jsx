import React from 'react';

import { useEffect, useMemo, useState } from 'react';
import { loadFireworksPreset } from '@tsparticles/preset-fireworks';
import Particles, { initParticlesEngine } from '@tsparticles/react';

function Fireworks() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadFireworksPreset(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => ({
			emitters: {
				life: {
					count: 0,
					duration: 0.1,
					delay: 0.1,
				},
			},
			particles: {
				mode: 'split',
				bounds: {
					top: { min: 10, max: 30 },
				},
				split: {
					sizeOffset: false,
					count: 1,
					factor: {
						value: 0.333333,
					},
					rate: {
						value: { min: 75, max: 150 },
					},
				},
			},
			preset: 'fireworks',
		}),
		[]
	);
	if (init) {
		return (
			<div>
				<Particles options={options} />
			</div>
		);
	}
}

export default Fireworks;
