router.put('/:id/promote', verifyAdmin, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { isAdmin: true }, { new: true });
  res.json(user);
});