import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("OrderStatus", () => {
  it("should display the right text based on ordezstatus PENDING", () => {
    const wrapper = render(<OrderStatus status="pending" />);
    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text based on order status CANCELED", () => {
    const wrapper = render(<OrderStatus status="canceled" />);
    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text based on order status PROCESSING", () => {
    const wrapper = render(<OrderStatus status="processing" />);
    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-yellow-500");
  });

  it("should display the right text based on order status DELIVERING", () => {
    const wrapper = render(<OrderStatus status="delivering" />);
    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-cyan-500");
  });

  it("should display the right text based on order status DELIVERED", () => {
    const wrapper = render(<OrderStatus status="delivered" />);
    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
