export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload = req.body || {};
  console.log("Mock checkout request", payload);

  if (payload.type === "subscription" || payload.type === "community") {
    return res.status(200).json({
      provider: payload.provider || "Stripe subscription test",
      redirectUrl: `/dashboard?plan=${encodeURIComponent(payload.plan || "basic")}`
    });
  }

  return res.status(200).json({
    provider: payload.provider || "Stripe test",
    redirectUrl: `/thank-you?source=${encodeURIComponent(payload.type || "checkout")}`
  });
}
