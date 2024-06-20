const a = {
	fnA() {
		console.log("fnA", this);
		const b = {
			fnB() {
				console.log("fnB", this);
				const c = {
					fnC() {
						console.log("fnC", this);
						console.log("a", a);
						console.log("b", b);
						console.log("c", c);
						console.log("x", x);
					},
				};
				return c;
			},
		};
		return b;
	},
	fnX() {
		console.log("fnX", this);
		const x = {
			fnY() {
				console.log("fnY", this);
				console.log("a", a);
				console.log("b", b);
				console.log("x", x);
			},
		};
	},
};
a.fnA().fnB().fnC();
a.fnY();
