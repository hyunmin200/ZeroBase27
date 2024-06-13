// 기본 내보내기(Default export)
// - 이름이 필요치 않습니다.
// - 모듈에서 1번만 사용할 수 있습니다.
// export default 데이터;
export default [1, 2, 3];

// 이름 내보내기(Named export)
// - 이름이 필수입니다.
// - 모듈에서 여러번 사용할 수 있습니다.
// export const 이름1 = 데이터1;
// export const 이름2 = 데이터2;
// export function 이름3() {}
// export const a = 1;
// export const b = 3;

const a = 1;
const b = 3;

// 모아서 내보내기 (객체 아님)
export { a, b };
