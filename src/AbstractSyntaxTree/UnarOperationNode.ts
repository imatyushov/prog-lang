import Token from "../Token";
import ExpressionNode from "./ExpressionNode";

export default class BinOperationNode {
    operator: Token;
    operand: ExpressionNode;

    constructor(operator: Token, operand: ExpressionNode) {
        this.operator = operator;
        this.operand = operand;
    }
}