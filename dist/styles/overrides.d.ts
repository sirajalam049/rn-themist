import { DeepPartial } from "../typings";
import { useButtonStyle } from "../components/Button";
export interface Overrides {
    button: DeepPartial<ReturnType<typeof useButtonStyle>>;
}
